const root = ReactDOM.createRoot(document.getElementById("root"));


// ===============================
// Header Component
// ===============================

const HeaderComponent = () => {
    return (
        <div className="header">
            <h1>E-Commerce Website</h1>
        </div>
    );
};


// ===============================
// Product Component
// ===============================

const ProductComponent = () => {

    const [products, setProducts] = React.useState([]);

    const [loading, setLoading] = React.useState(true);


    // Fetch products from API
    React.useEffect(() => {

        fetch("https://dummyjson.com/products")

            .then((res) => res.json())

            .then((data) => {

                console.log(data);

                setProducts(data.products);

                setLoading(false);

            })

            .catch((error) => {

                console.log(error);

                setLoading(false);

            });

    }, []);


    // Loading message
    if (loading) {
        return <h2>Loading products...</h2>;
    }


    return (
        <div className="prod-container">

            {products.map((product) => (

                <div className="product" key={product.id}>

                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />

                    <h3>{product.title}</h3>

                    <p>${product.price}</p>

                    <button>
                        Add to Cart
                    </button>

                </div>

            ))}

        </div>
    );
};


// ===============================
// Footer Component
// ===============================

const FooterComponent = () => {

    return (
        <div className="footer">

            <p>
                Copyright © 2026. All rights reserved.
            </p>

        </div>
    );
};


// ===============================
// Main React Element
// ===============================

const reactElement = (
    <>
        <HeaderComponent />

        <ProductComponent />

        <FooterComponent />
    </>
);


// ===============================
// Render React Application
// ===============================

root.render(reactElement);