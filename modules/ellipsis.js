export default function (el, binding) {
  const width = !binding.arg ? `100px` : 
                typeof binding.arg === 'number' ?  
                `${binding.arg}px` : binding.arg;
  el.style.width = `${width}`
  el.style.whiteSpace = 'nowrap'
  el.style.overflow = 'hidden';
  el.style.textOverflow = 'ellipsis';
}