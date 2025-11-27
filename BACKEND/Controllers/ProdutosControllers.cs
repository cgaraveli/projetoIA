
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProdutosControllers : ControllerBase
{
    private readonly AppDbContext _context;

   public ProdutosControllers(AppDbContext context)
   {
        _context = context;
   }

    //Obtém todos os produtos
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Produtos>>> GetProdutos()
    {
        var Produtos = await _context.Produtos.ToListAsync();

        return Ok(Produtos);
    }

    //Obtém um produto específico
    [HttpGet("{id}")]
    public async Task<ActionResult<Produtos>> GetProduto(int id)
    {
        var produto = await _context.Produtos.FindAsync(id);
        if (produto == null)
        {
            return NotFound();
        }

        return produto;
    }

    //Cria uma nova ferramenta
    [HttpPost]
    public async Task<ActionResult<Produtos>> PostProduto(Produtos produto)
    {
        _context.Produtos.Add(produto);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetProduto", new { id = produto.idprodutos }, produto);
    }

    //Atualiza um produto existente
    [HttpPut("{id}")]
    public async Task<IActionResult> PutProduto(int id, Produtos produto)
    {
        if (id != produto.idprodutos)
        {
            return BadRequest();
        }

        _context.Entry(produto).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Produtos.Any(e => e.idprodutos == id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    //Exlui um produto
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProduto(int id)
    {
        var produto = await _context.Produtos.FindAsync(id);
        if (produto == null)
        {
            return NotFound();
        }

        return NoContent();
    }
}