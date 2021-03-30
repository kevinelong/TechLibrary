using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TechLibrary.Data;
using TechLibrary.Domain;
using TechLibrary.Models;

namespace TechLibrary.Services
{
    public interface IBookService
    {
        Task<List<Book>> GetBooksAsync();
        Task<int> GetBooksCountAsync(string searchText);
        Task<List<Book>> GetBooksPagedAsync(int pageNumber, int pageSize, string searchText);
        Task<Book> GetBookByIdAsync(int bookid);
        Task<Book> SaveBookAsync(Book book);
    }

    public class BookService : IBookService
    {
        private readonly DataContext _dataContext;

        public BookService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<List<Book>> GetBooksAsync()
        {
            var queryable = _dataContext.Books.AsQueryable();

            return await queryable.ToListAsync();
        }
        public async Task<int> GetBooksCountAsync(string searchText = "")
        {
            var queryable = _dataContext.Books.AsQueryable();
            if (searchText != null) {

                return queryable.Where(b =>
                    b.Title.Contains(searchText) ||
                    b.ISBN.Contains(searchText) ||
                    b.LongDescr.Contains(searchText)
                ).Count();
            }
            return queryable.Count();

        }
        public async Task<List<Book>> GetBooksPagedAsync(int pageNumber=0, int pageSize=10, string searchText="")
        {
            var queryable = _dataContext.Books.AsQueryable();

            if (searchText != null)
            {
                return await queryable.Where(b =>
                    b.Title.Contains(searchText) ||
                    b.ISBN.Contains(searchText) ||
                    b.ShortDescr.Contains(searchText)
                ).Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
            }
            return await queryable.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();

        }

        public async Task<Book> GetBookByIdAsync(int bookid)
        {
            return await _dataContext.Books.SingleOrDefaultAsync(x => x.BookId == bookid);
        }
        public async Task<Book> SaveBookAsync(Book book)
        {
            return await _dataContext.Books.SingleOrDefaultAsync(x => x.BookId == book.BookId);
        }
    }
}
