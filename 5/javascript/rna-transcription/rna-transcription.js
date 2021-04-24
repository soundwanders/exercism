
export const toRna = (str) => {

  let transcribe = {
    'G' : 'C', 
    'C' : 'G', 
    'T' : 'A', 
    'A' : 'U'
  }
  let nucleotides = str.split('');
  let rna = nucleotides.map(i => transcribe[i]).join('');
  return rna;
};