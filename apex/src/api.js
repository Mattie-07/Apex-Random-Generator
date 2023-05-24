const apexUrl = ""

export async function fetchLegendsData(){
    const response = await fetch(apexUrl);
    const data = await response.json();
    const legends = data.legends.map((map =>{
        const passiveString = JSON.stringify(legend.abilities[0].passive).slice(1, -1);
        const tacticalString = JSON.stringify(legend.abilities[0].tactical).slice(1, -1);
        return {
            id:legend.id,
            legendImage: 'assets/${legend.legendImage}',
            classIcon: 'assets/${legend.classIcon}',
            name: legend.name,
            role: legend.role,
            passiveString,
            tacticalString    
        }
    }))
        return legends;
}