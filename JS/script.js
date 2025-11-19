const bhagwatGeeta = (id) => {
    let Ch = 'https://vedicscriptures.github.io/chapters/';
    let idNum = 1;
    let output = document.getElementById('all_chapters');


    fetch(Ch).then((res) => {
        return res.json();
    }).then((data => {
        let str = '';
        data.forEach((ele) => {
            str += `
                <div class="col-12 col-lg-6 col-xl-4" id="${idNum++}" onclick="return Data(this.id,${ele.verses_count},${ele.chapter_number},'${ele.name}')">
                        <div class="ch-cards">
                            <h2 class="text-center mb-3">
                                <strong>Chapter :-${ele.chapter_number}</strong>
                            </h2>
                            <h6 class="text-center text-white">
                                ${ele.name}
                            </h6>
                        </div>
                    </div>
            `
        })
        output.innerHTML = str;

    })).catch((err) => {
        console.log("err", err);
    })
}
document.querySelector('.slok-model').style.display='none';
const Data = (id, vers_count, ch_num, ch_name) => {
    document.querySelector('.slok-model').style.display='block';
    document.querySelector('.main-aria').style.display='none';
    str = '';
    output = document.getElementById('sec_output')
    
    let slokHeader=document.getElementById('slok-header')
    let secStr='';
    secStr+= `
        <div><h2>Chapter ${ch_num} :- ${ch_name}</h2></div>
    `
    slokHeader.innerHTML = secStr;
    let closeBtn = document.querySelector('.close-btn');
    let offSlok = document.querySelector('.slok-model')

    closeBtn.addEventListener('click',(btn)=>{
        offSlok.style.display="none";
     document.querySelector('.main-aria').style.display='block';
    })
    for (let i = 1; i <= vers_count; i++) {
        let Vers = `https://vedicscriptures.github.io/slok/${id}/${i}/`;
        fetch(Vers).then(res => {
            return res.json();
        }).then(vdata => {
            str += `
               
                <div class="col-12 my-4 rounded p-4" style=" border: solid 2px rgba(255, 215, 0, 0.4);">
                    <h6><span style="color: rgba(255, 215, 0, 0.7);">Verse :- </span>${vdata.verse}</h6>
                    <p class="mb-0">
                       <span style="color: rgba(255, 215, 0, 0.7);">Hindi :- </span> ${vdata.slok}
                    </p>
                    <p>
                        <span style="color: rgba(255, 215, 0, 0.7);">English :- </span> ${vdata.transliteration}
                    </p>
                </div>
            `
            output.innerHTML = str;
        }).catch(err => {
            console.log("err", err);
        })
    }

}
bhagwatGeeta(1)