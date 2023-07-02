// Get all the blocks
const blocks = document.querySelectorAll('.block');

// Function to handle block scrolling animation
function handleBlockScrollAnimation() {
  blocks.forEach((block, index) => {
    const blockRect = block.getBoundingClientRect();
    const blockTop = blockRect.top;
    const blockBottom = blockRect.bottom;

    // Check if the block is in the viewport
    if (blockTop < window.innerHeight && blockBottom >= 0) {
      // Add a class to the block to indicate it's active
      block.classList.add('active');

      // Remove the class from other blocks
      blocks.forEach((otherBlock, otherIndex) => {
        if (otherIndex !== index) {
          otherBlock.classList.remove('active');
        }
      });
    }
  });
}

// Function to handle scroll event
function handleScroll() {
  handleBlockScrollAnimation();

  // Check if any block is active
  const activeBlock = document.querySelector('.block.active');
  if (activeBlock) {
    // Temporarily disable scroll only for the active block
    activeBlock.style.overflow = 'hidden';
  } else {
    // Enable scroll when no block is active
    blocks.forEach((block) => {
      block.style.overflow = 'auto';
    });
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial call to handle scroll
handleScroll();
