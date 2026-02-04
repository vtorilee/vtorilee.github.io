const container = document.getElementById("bar-chart");

container.innerHTML = `
<svg width="1500" height="480">
        
        <line x1="40" y1="400" x2="500" y2="400" stroke="black" />
        <line x1="40" y1="15" x2="40" y2="400" stroke="black" />
 
        <text x="20" y="405" font-size="12">0</text>
        <text x="20" y="330" font-size="12">2</text>
        <text x="20" y="255" font-size="12">4</text>
        <text x="20" y="180" font-size="12">6</text>
        <text x="20" y="105" font-size="12">8</text>
        <text x="17" y="25" font-size="12">10</text>

        <rect x="75" y="100" width="75" height="300" fill="black"></rect>
        <rect x="155" y="60" width="75" height="340" fill="black"></rect>
        <rect x="235" y="60" width="75" height="340" fill="black"></rect>
        <rect x="315" y="140" width="75" height="260" fill="black"></rect>
        <rect x="395" y="20" width="75" height="380" fill="black"></rect>

        <text x="79" y="420" font-size="12">86 Eighty-Six</text>
        <text x="165" y="420" font-size="12">Kaiju No. 8</text>
        <text x="237" y="420" font-size="12">Jujutsu Kaisen</text>
        <text x="318" y="420" font-size="12">Tower of God</text>
        <text x="415" y="420" font-size="12">Frieren</text>

        <polygon points="1000, 80, 1100, 190, 810, 150" transform="rotate(-48 822 105)" fill="grey"></polygon>
        <rect x="808" y="40" width ="160" height="100" rx ="5" transform="rotate(-45 818 120)" fill="white"></rect>
        <rect x="858" y="20" width ="160" height="100" rx ="5" transform="rotate(-45 818 120)" fill="white"></rect>
        <rect x="818" y="120" width ="153" height="50" rx ="5" transform="rotate(-45 818 120)" fill="grey"></rect>
        <rect x="856" y="110" width ="75" height="70" rx ="5" transform="rotate(-45 818 120)" fill="grey"></rect>
        <rect x="876" y="179" width ="35" height="200" rx ="5" transform="rotate(-45 818 120)" fill="brown"></rect>

        <ellipse cx="650" cy="165" rx="20" ry="6" transform="rotate(-45 818 120)" fill="black"></ellipse>
        <rect x="640" y="170" width="20" height="70" transform="rotate(-45 818 120)" fill="black"></rect>

        <ellipse cx="1050" cy="165" rx="20" ry="6" transform="rotate(45 818 120)" fill="black"></ellipse>
        <rect x="1040" y="170" width="20" height="70" transform="rotate(45 818 120)" fill="black"></rect>

        <ellipse cx="540" cy="205" rx="20" ry="6" transform="rotate(-75 818 120)"fill="black"></ellipse>
        <rect x="530" y="200" width="20" height="80" transform="rotate(-75 818 120)" fill="black"></rect>


</svg>
`;

