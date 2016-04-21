'use strict';
if (this.QUnitPractice === undefined) this.QUnitPractice = {};

(function(context) {

  function filterAuthorsByLanguage(authors, language) {
    var filteredAuthors = authors.filter(function (author) {
      return author.language === language;
    })
    return filteredAuthors;

  }

  function filterAuthorsCount(authors, language) {
    var filtered = filterAuthorsByLanguage(authors, language);
    return filtered.length;
  }

  function authorsWhoWroteOver500Filter(authors) {
    var filteredAuthors = authors.filter(function (author) {
      return author.publishedWorks > 500;
    })
    return filteredAuthors.length;
  }

  function authorWithMostPublishedWorks(authors) {
    var authorName = '';
    var mostWorks = authors[0];
    var result = authors.forEach(function (author, i) {
      if (authors[i].publishedWorks > mostWorks.publishedWorks) {
        mostWorks = authors[i];
        authorName = authors[i].name;
      }
    })
    return authorName;
  }

  function authorsWhoseNameBeginsWithLetter(authors, letter) {
    var filteredAuthors = authors.filter( function(author) {
      return author.name.indexOf(letter) === 0;
    })

    return filteredAuthors.length;
  }

  function averagePublishedWorks(authors) {
    var sum = 0;
    var result = authors.forEach(function (author) {
      return sum += author.publishedWorks;
    })
    return Math.round(sum / authors.length);
  }

  function averagePublishedWorksByLanguage(authors, language){
    var filteredAuthors = filterAuthorsByLanguage(authors, language);
    var average = averagePublishedWorks(filteredAuthors);
    return average;
  }

  context.filterAuthorsCount = filterAuthorsCount;
  context.authorsWhoWroteOver500Filter = authorsWhoWroteOver500Filter;
  context.authorWithMostPublishedWorks = authorWithMostPublishedWorks;
  context.authorsWhoseNameBeginsWithLetter = authorsWhoseNameBeginsWithLetter;
  context.averagePublishedWorks = averagePublishedWorks;
  context.averagePublishedWorksByLanguage = averagePublishedWorksByLanguage;

})(window.QUnitPractice);
