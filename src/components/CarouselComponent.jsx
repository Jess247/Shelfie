import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function CarouselComponent({books}) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }
 
      console.log(books[0].author_name[0])
    return(
        <Carousel responsive={responsive} className="text-center my-8">
            <div>{books[0].author_name[0]}</div>
            <div>{books[1].author_name[0]}</div>
            <div>{books[2].author_name[0]}</div>
            <div>{books[3].author_name[0]}</div>
            <div>{books[4].author_name[0]}</div>
        </Carousel>
    )
}