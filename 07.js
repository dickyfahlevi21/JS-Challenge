// #Count Words
const paragraph = "Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu  La... la... la... Aku sayang sekali Doraemon  La... la... la... Aku sayang sekali"

const countWord = (paragraf, ...match) => {
    paragraf = paragraf.split(' ')
    let listMatch = {}
    for (let i = 0; i < paragraf.length; i++) {
        for (let j = 0; j < match.length; j++) {
            if (paragraf[i].toLowerCase() == match[j].toLowerCase()) {
                // console.log(paragraf[i], match[j])
                listMatch[match[j]] === undefined ? listMatch[match[j]] = 1 : listMatch[match[j]]++;
            }
        }
    }
    console.log(listMatch)
}
countWord(paragraph, "Aku", "ingin", "dapat")