importScripts('node_modules/pouchdb/dist/pouchdb.min.js');
importScripts('node_modules/pouchdb/dist/pouchdb.find.min.js');

var db = new PouchDB('http://localhost:5984/statistics');

onmessage = async function(e) {
  //console.log('Message received from main script');
  const res = await db.query('my_index8/by_municipality', {
    startkey: 'A',
    reduce: true,
    group: true,
    limit: e.data.limit,
    skip: e.data.skip
  });

  let concatData = e.data.tableitems.concat(res.rows);
  e.data.tableitems = concatData;

  var workerResult = {'rows': res.rows, 'tableitems': e.data.tableitems};
  //console.log('Posting message back to main script');
  postMessage(workerResult);
}