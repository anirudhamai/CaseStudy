using DBLibrary.Extensions;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
using System.Security.Claims;
using System.Text;
>>>>>>> Stashed changes
using System.Text.Json.Serialization;


var builder = WebApplication.CreateBuilder(args);


<<<<<<< Updated upstream
builder.Services.AddControllers();
=======
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["JWT:Issuer"],
            ValidAudience = builder.Configuration["JWT:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"])),
            RoleClaimType = ClaimTypes.Role
        };
    });
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
>>>>>>> Stashed changes
builder.Services.AddEndpointsApiExplorer();
<<<<<<< Updated upstream
builder.Services.AddSwaggerGen();
builder.Services.AddDBLibrary("connectionString");
//builder.Services.AddControllers().AddNewtonsoftJson(options =>
 //   options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
builder.Services.AddControllers().AddJsonOptions(x => { 
    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
    x.JsonSerializerOptions.MaxDepth = 64; 
});
=======
builder.Services.AddDBLibrary(builder.Configuration.GetConnectionString("Constr"));
>>>>>>> Stashed changes
builder.Services.AddSwaggerGen(options =>
{
    options.InferSecuritySchemes();
    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" }
            },
            new string[] {}
        }
    });
});
builder.Services.Configure<SwaggerGeneratorOptions>(options =>
{
    options.InferSecuritySchemes = true;
});

<<<<<<< Updated upstream
<<<<<<< Updated upstream
builder.Services.AddAuthorization();
builder.Services.AddAuthentication("Bearer").AddJwtBearer();
=======
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AdminPolicy", policy => policy.RequireRole("Admin"));
    options.AddPolicy("UserPolicy", policy => policy.RequireRole("User"));
}
);
//builder.Services.AddAuthentication("Bearer").AddJwtBearer();
>>>>>>> Stashed changes

=======
>>>>>>> Stashed changes
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin() // Allow any origin
              .AllowAnyMethod() // Allow any method (GET, POST, etc.)
              .AllowAnyHeader(); // Allow any header
    });
});

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
app.UseCors();
=======
>>>>>>> Stashed changes
app.UseRouting();
app.UseAuthentication();
>>>>>>> Stashed changes
app.UseAuthorization();
<<<<<<< Updated upstream

app.MapControllers();

=======
app.UseCors();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});
>>>>>>> Stashed changes
app.Run();
