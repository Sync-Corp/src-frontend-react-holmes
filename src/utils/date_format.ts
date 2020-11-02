export default function date_format(data: string = "") {
    const [ano, mes, dia] = data.split('T')[0].split('-');

    return `${dia}/${mes}/${ano}`;
}