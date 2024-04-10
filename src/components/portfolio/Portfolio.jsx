import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "",
    },
    {
        id: 2,
        title: "Portfolio.js App",
        img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "First Portfolio Site",
        link: "https://keithnoro.com"
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/409701/pexels-photo-409701.jpeg",
        desc: "",
    },
    {
        id: 4,
        title: "C# App",
        img: "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "",
    },
]

// Lorem Ipsum sentence: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quaerat rem officiis. Voluptate nam ducimus qui. Sit voluptatum officiis eligendi debitis, saepe earum id ratione voluptas delectus molestiae excepturi quidem?

const Single = ({ item }) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({ 
        target: ref, 
        // offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress,[0, 1], [-300, 300])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer"  style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        {item.link && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <button>See Demo</button>
                            </a>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({ 
        target: ref, 
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio