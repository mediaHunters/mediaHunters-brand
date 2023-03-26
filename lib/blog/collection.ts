interface WithEmoji {
    emoji?: string;
}

interface WithLogo {
    logo?: string;
}

interface Collection extends WithEmoji, WithLogo {
    name: string;
    slug: string;
    emoji: string;
    text: string
}

export default Collection;