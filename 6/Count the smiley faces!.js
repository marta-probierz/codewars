function countSmileys(arr) {
    return arr.filter(e => e === ':)' || e === ';)' || e === ':-)' || e === ';-)' || e === ':~)' || e === ';~)' || e === ':D' || e === ';D' || e === ':-D' || e === ';-D' || e === ':~D' || e === ';~D').length;
}
