using DBLibrary.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Case_Study_RestAPI_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IConfiguration _config;

        public AdminController(IConfiguration conf)
        {
            _config = conf;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Authenticate([FromBody] CustomerCredentials customer)
        {
            using (var context = new ShopeaseContext())
            {
                // Validate user from the database
                if (!(customer.email == "admin" && customer.Password == "admin"))
                {
                    return Unauthorized("Invalid username/password!!!");
                }
                var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Sub, "admin"),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

                claims.Add(new Claim(ClaimTypes.Role, "Admin"));
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
        }

    }
}
