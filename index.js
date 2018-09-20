module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  // Return content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.match(/[a-z]/gi).join("").toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.content) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }
}

