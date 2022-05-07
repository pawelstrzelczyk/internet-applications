﻿using System.Collections.Generic;

using System.ComponentModel.DataAnnotations;


namespace MVC.Models
{
    
    public class Genre
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required!")]
        [StringLength(100, ErrorMessage = "Maximal length of the name of a song is 100 characters!")]
        public string Name { get; set; }

        public virtual ICollection<Song> Songs { get; set; }
    }
}