
var authors = [
  { name: 'Andrew Murray', language: 'English', publishedWorks: 240 },
  { name: 'Muhammad Muhiyyudin Ibn ul Arabi', language: 'Arabic', publishedWorks: 240 },
  { name: 'Jallaludin Suyuti', language: 'Arabic', publishedWorks: 700 },
  { name: 'Abu Hamid Al Ghazali', language: 'Arabic', publishedWorks: 200 },
  { name: 'Isaac Asimov', language: 'English', publishedWorks: 506 },
  { name: 'Jacob M. Appel', language: 'English', publishedWorks: 200 },
  { name: 'Meish Goldish', language: 'English', publishedWorks: 300 },
  { name: 'Kyokutei Bakin', language: 'Japanese', publishedWorks: 470 },
  { name: 'Ursula Bloom', language: 'English', publishedWorks: 500 },
  { name: 'Enid Blyton', language: 'English', publishedWorks: 600 },
  { name: 'Barbara Cartland', language: 'English', publishedWorks: 722 },
  { name: 'Darya Dontsova', language: 'Russian', publishedWorks: 140 },
  { name: 'Alexandre Dumas', language: 'French', publishedWorks: 277 },
  { name: 'Jacob Neusner', language: 'English', publishedWorks: 950 },
  { name: 'Georges Simenon', language: 'French', publishedWorks: 500 }
]

QUnit.test( 'count of authors who wrote in Arabic', function( assert ) {
  var filtered = QUnitPractice.filterAuthorsCount(authors, 'Arabic');
  assert.deepEqual(filtered, 3, 'Should have returned three results.' );
});

QUnit.test( 'count of authors who wrote in English', function(assert ) {
  var filtered = QUnitPractice.filterAuthorsCount(authors, 'English');
  assert.deepEqual(filtered, 8, 'Should have returned eight results.');
});

QUnit.test( 'count of authors who wrote in Russian', function(assert ) {
  var filtered = QUnitPractice.filterAuthorsCount(authors, 'Russian');
  assert.deepEqual(filtered, 1, 'Should have returned one result.');
});

QUnit.test( 'count of authors who wrote over 500 books', function(assert) {
  var filtered = QUnitPractice.authorsWhoWroteOver500Filter(authors);
  assert.deepEqual(filtered, 5, 'Should have returned 5 results.');
});

QUnit.test( 'return the author with the most Published works', function(assert) {
  var filtered = QUnitPractice.authorWithMostPublishedWorks(authors);
  assert.deepEqual(filtered, 'Jacob Neusner', 'Should have returned Jacob Neusner');
});

QUnit.test( 'count of authors with name beginning with letter A', function(assert) {
  var filtered = QUnitPractice.authorsWhoseNameBeginsWithLetter(authors, 'A');
  assert.deepEqual(filtered, 3, 'Should have returned 3 results.');
});

QUnit.test( 'count of authors with name beginning with letter K', function(assert) {
  var filtered = QUnitPractice.authorsWhoseNameBeginsWithLetter(authors, 'K');
  assert.deepEqual(filtered, 1, 'Should have returned 1 result.');
});

QUnit.test( 'compute the average number of published works', function(assert) {
  var computed = QUnitPractice.averagePublishedWorks(authors);
  assert.deepEqual(computed, 436, 'Should have returned 436.');
});

QUnit.test( 'compute the average number of published works by English authors', function(assert) {
  var computed = QUnitPractice.averagePublishedWorksByLanguage(authors, 'English');
  assert.deepEqual(computed, 502, 'Should have returned 502.');
});

QUnit.test( 'compute the average number of published works by Japanese authors', function(assert) {
  var computed = QUnitPractice.averagePublishedWorksByLanguage(authors, 'Japanese');
  assert.deepEqual(computed, 470, 'Should have returned 470.');
});
//Write tests to get these bits of data, and then write the functions to return that data to pass the tests
/*

* Count the number of English writers
* Count the number of Russian writers
* Count the number of authors who wrote over 500 books
* The author with the most published works
* Count of the authors whose name begins with the letter 'A'
* Count of the authors whose name begins with the letter 'K'
* Compute the average number of published works
* Compute the average number of published works by English authors
* Compute the average number of published works by Japanese authors

*/
