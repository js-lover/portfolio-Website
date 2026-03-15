import { useEffect, useState } from 'react';

interface MediumArticle {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    categories: string[];
}

const MediumArticlesComponent = () => {
    const [articles, setArticles] = useState<MediumArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(
                    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@serhatbarisaydin'
                );
                const data = await response.json();

                if (data.status === 'ok') {
                    // Process items to extract image if thumbnail is missing
                    const processedArticles = data.items.map((item: MediumArticle) => {
                        let image = item.thumbnail;

                        if (!image || image.length === 0) {
                            const div = document.createElement('div');
                            div.innerHTML = item.content;
                            const img = div.querySelector('img');
                            if (img) {
                                image = img.src;
                            }
                        }

                        // Fallback image if still no image found
                        if (!image) {
                            // Using a placeholder or the profile image if needed, or a colorful gradient/pattern
                            image = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop';
                        }

                        return { ...item, thumbnail: image };
                    });

                    // Take the first 3 items
                    setArticles(processedArticles.slice(0, 3));
                } else {
                    setError('Failed to fetch articles');
                }
            } catch (err) {
                setError('An error occurred while fetching articles');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    // Helper to extract a short preview text from HTML content or description
    const getPreviewText = (htmlContent: string) => {
        const div = document.createElement('div');
        div.innerHTML = htmlContent;
        const text = div.textContent || div.innerText || '';
        return text.length > 100 ? text.substring(0, 100) + '...' : text;
    };

    // Format date
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div id="articles" className="relative w-full py-20 px-4 overflow-hidden bg-gradient-hero">
            {/* Background decorative blob - Reusing similar style to other sections */}
            <div className="blob-2 top-20 right-0 animate-blob" style={{ animationDelay: "-2s" }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] section-title mb-4">
                        Recent Articles
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Sharing my thoughts and experiences on technology and development.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-start)]"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 hidden">{error}</div>
                    // In a portfolio, if it fails, maybe better just to hide or show nothing specific, 
                    // but for now keeping it hidden or minimal.
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {articles.map((article) => (
                            <a
                                key={article.guid}
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"

                                className="card-modern rounded-2xl overflow-hidden flex flex-col h-full group bg-[var(--bg-light)]"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={article.thumbnail}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <span className="text-white font-medium text-sm">Read on Medium</span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-3 flex items-center gap-2">
                                        <span className="text-xs font-semibold px-2 py-1 bg-[var(--bg-hero)] text-[var(--primary-start)] rounded-full">
                                            {article.categories.length > 0 ? article.categories[0] : 'Tech'}
                                        </span>
                                        <span className="text-xs text-[var(--text-secondary)]">
                                            {formatDate(article.pubDate)}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary-start)] transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>

                                    <div className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-3 flex-grow"
                                        dangerouslySetInnerHTML={{ __html: getPreviewText(article.content) }}
                                    />

                                    <div className="mt-auto flex items-center text-[var(--text-primary)] font-semibold group/link">
                                        Read Article
                                        <svg className="w-4 h-4 ml-2 transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                <div className="text-center mt-8">
                    <a
                        href="https://medium.com/@serhatbarisaydin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-modern inline-flex items-center gap-2"
                    >
                        <span>View All Articles</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MediumArticlesComponent;
