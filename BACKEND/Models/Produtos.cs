using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

[Table("produtos")]
public class Produtos
{
    [Column("idprodutos")]
    [Key]
    public int idprodutos { get; set; }
    public string Nome { get; set; }
    public decimal Preco { get; set; }
    public string Descricao { get; set; }

    public enum Genero 
    { 
        Masculino = 1, 
        Feminino = 2, 
        Unisex = 3 
    }

}