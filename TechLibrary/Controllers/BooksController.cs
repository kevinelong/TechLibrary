using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using TechLibrary.Domain;
using TechLibrary.Models;
using TechLibrary.Services;
using System;
using Microsoft.AspNetCore.Cors;

namespace TechLibrary.Controllers
{
    [EnableCors("VueCorsPolicy")]
    [ApiController]
    [Route("[controller]")]
    public class BooksController : Controller
    {
        private readonly ILogger<BooksController> _logger;
        private readonly IBookService _bookService;
        private readonly IMapper _mapper;

        public BooksController(ILogger<BooksController> logger, IBookService bookService, IMapper mapper)
        {
            _logger = logger;
            _bookService = bookService;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAll(int pageNumber = 1, int pageSize = 2, string searchText = "")
        {
            _logger.LogInformation("Get all books");
            var books = await _bookService.GetBooksPagedAsync(pageNumber, pageSize, searchText);

            var bookResponse = _mapper.Map<List<BookResponse>>(books);
            var count = await _bookService.GetBooksCountAsync(searchText);
            var pageCount =  (count + pageSize) / pageSize;
            return Ok(new { bookResponse, pageNumber, pageSize, pageCount });
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            _logger.LogInformation($"Get book by id {id}");

            var book = await _bookService.GetBookByIdAsync(id);

            var bookResponse = _mapper.Map<BookResponse>(book);

            return Ok(bookResponse);
        }

        [HttpPost]
        [ActionName("Save")]
        public async Task<IActionResult> PostSave(Book book)
        {
            _logger.LogInformation($"Save book");

            var saved = await _bookService.SaveBookAsync(book);

            var bookResponse = _mapper.Map<BookResponse>(saved);

            return Ok(bookResponse);
        }
    }
}
