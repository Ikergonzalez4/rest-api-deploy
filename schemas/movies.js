const z = require('zod');

const movieSchema = z.object({
    title: z.string({invalid_type_error: 'Title must be a string'}),
    genre: z.array(
        z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Crime', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Thriller', 'Western', "Sci-Fi"])
    ),
    year: z.number().int().min(1900).max(2024),    
    director: z.string(),
    duration: z.number().int().positive(),    
    rate: z.number().min(0).max(10).default(5),
    poster: z.string().url()
})

function validateMovie (input) {
    return movieSchema.safeParse(input)
}

function validatePartialMovie (input) {
    return movieSchema.partial().safeParse(input)
}

module.exports = {
    validateMovie,
    validatePartialMovie
}