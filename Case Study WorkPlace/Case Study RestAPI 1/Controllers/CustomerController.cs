using DBLibrary.Models;
using DBLibrary.Repo;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


namespace Case_Study_RestAPI_1.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]

    public class CustomerController : ControllerBase
    {
        private readonly ICustomer _int1;
        private readonly IAddress _int2;
        private readonly IConfiguration _config;
        public CustomerController(ICustomer icontext, IAddress iaddr, IConfiguration config)
        {
            _int1 = icontext;
            _config = config;
            _int2 = iaddr;
        }
        // GET: api/<CustomerController>
        [HttpGet]
        public List<Customer> Get()
        {
            return _int1.GetCustomer().ToList();
        }

        // GET api/<CustomerController>/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public Customer Get(int id)
        {
            return _int1.GetCustomerById(id);
        }

        // POST api/<CustomerController>
        [HttpPost]
        [AllowAnonymous]
        public void Post([FromBody] Customer c)
        {
            string hashed = c.Password.GetHashCode().ToString();
            c.Password = hashed;
            _int1.AddCustomer(c);
        }

        // PUT api/<CustomerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Customer c)
        {
            _int1.UpdateCustomer(id, c);
        }

        // DELETE api/<CustomerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _int1.DeleteCustomer(id);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] CustomerCredentials customer)
        {
            using (var context = new ShopeaseContext())
            {
                // Validate user from the database
                var dbUser = await context.Customers.FirstOrDefaultAsync<Customer>((u => u.Password == customer.Password.GetHashCode().ToString() && u.Email == customer.email));

                if (dbUser != null)
                {
                    // Generate JSON Web Token with the valid details and return
                    var key = Encoding.UTF8.GetBytes(_config["JWT:Key"]);
                    var tokenDescriptor = new SecurityTokenDescriptor
                    {
                        Issuer = _config["JWT:Issuer"],
                        Audience = _config["JWT:Audience"],
                        Expires = DateTime.UtcNow.AddMinutes(10),
                        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                    };

                    var tokenHandler = new JwtSecurityTokenHandler();
                    var token = tokenHandler.CreateToken(tokenDescriptor);
                    return Ok(tokenHandler.WriteToken(token));
                }
                else
                {
                    return Unauthorized("Invalid username/password!!!");
                }
            }
        }
    }
}

