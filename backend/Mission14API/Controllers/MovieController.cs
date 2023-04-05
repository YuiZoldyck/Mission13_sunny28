using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission14API.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission14API.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class MovieController : Controller
    {
        private JoelHiltonMovieCollectionContext context;

        public MovieController(JoelHiltonMovieCollectionContext temp) {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            var m = context.Movies.ToArray()
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title);

            return m;
        }

    }
}

