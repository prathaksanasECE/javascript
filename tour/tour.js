document.write('<h1>welcome enter your details and have a safe travel!!</h1>')
document.write('<h3>choose a place</h3>')

var p=window.prompt('enter the place');
if(p=='Gateway of India'){
 gateway();
}
if(p=='The Ganges River'){
    TheGangesRiver();
    }
if(p=='Kapaleeshwarar Temple'){
         KapaleeshwararTemple();
    }
if(p=='taj mahal'){
        tajmahal();
   }
   if(p=='tea Plantations'){
    teaPlantations;
}
   function gateway(){
    document.write("The Gateway was later used as a symbolic ceremonial entrance to India for Viceroys and the new Governors of Bombay. It served to allow entry and access to India. The Gateway of India is located on the waterfront at Apollo Bunder area at the end of Chhatrapati Shivaji Marg in South Mumbai and overlooks the Arabian Sea")
    let img = document.createElement("img");
img.src = "https://cdn.pixabay.com/photo/2014/07/11/23/03/gateway-of-india-390768__340.jpg";
document.body.appendChild(img);
    
   }
   function TheGangesRiver(){document.write("Ganga is a famous sacred river that flows in several parts of India. It is the longest river in India known for its religious importance. The main streams of the river Ganga are Alaknanda and Bhagirathi. Ganga flows in different states of India like Delhi, Uttar Pradesh, Uttarakhand, Patna, and West Bengal")
    let img = document.createElement("img");
img.src = "https://img.theculturetrip.com/wp-content/uploads/2013/07/shutterstock_40183132-annapurna-bhavani-temple.jpg";
document.body.appendChild(img);
   }
   function KapaleeshwararTemple(){
    document.write("Kapaleeshwarar Temple is a Hindu temple dedicated to lord Shiva located in Mylapore, Chennai in the Indian state of Tamil Nadu. The form of Shiva's consort Parvati worshipped at this temple is called Karpagambal is from Tamil")
    let img = document.createElement("img");
img.src = "https://thumbs.dreamstime.com/b/shore-temple-built-pallavas-unescos-world-heritage-site-located-mamallapuram-mahabalipuram-tamil-nadu-south-india-216612534.jpg";
document.body.appendChild(img);
   }
   function tajmahal(){
    document.write("Taj Mahal was built in 1632 by the Mughal emperor Shah Jahan. Taj Mahal is made of white marble. The monument is one of the seven wonders of the world. Taj Mahal is essentially a tomb built in the memory of Shah Jahan's wife, Mumtaz Mahal. Taj Mahal is also famous as the symbol of love")
    let img = document.createElement("img");
img.src = "https://www.asiahighlights.com/india/whats-inside-the-taj-mahal";
document.body.appendChild(img);
   }
   function teaPlantations(){
    document.write("The hundreds of lush green tea-gardens nestling in the Himalayan foothills of Assam have not only added charm to the states natural beauty but also forms the backbone of its economy. They are the lifeline without which the state would have remained impoverished, undeveloped and economically at its lowest rung. Today tea industry of Assam constitutes its largest industry, providing livelihood, revenue, employment and development.")
    let img = document.createElement("img");
img.src = "https://media.istockphoto.com/id/1372104701/photo/tourist-in-agra-india.jpg?b=1&s=170667a&w=0&k=20&c=8WLDLRFwT0NMYmNb9lrqRI0A2Q7kXwfmz2s0KP4r8_E=";
document.body.appendChild(img);
   
   }
