using backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
//Controller
builder.Services.AddControllers();

//Conexao com o banco de dados
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
);

//Configurar Cors
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy => // Renomeei para ser mais claro
    {
        policy.WithOrigins("http://localhost:5173", // ⬅️ ADICIONE A PORTA DO REACT AQUI!
                           "http://localhost:5277")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

//Configurar o Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowReactApp");

//Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    //Adicionar Swagger em ambiente de desenvolvimento
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
//Mapear os controladores e cors
app.UseCors("AllowAll");
app.MapControllers();

app.Run();