using backend.Models;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Produtos> Produtos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Usuario>()
            .Property(u => u.IdUsuario)
            .ValueGeneratedOnAdd();

        modelBuilder.Entity<Produtos>()
            .Property(p => p.idprodutos)
            .ValueGeneratedOnAdd();
    }
}