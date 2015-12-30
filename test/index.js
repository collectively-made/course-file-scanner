import test from 'tape';
import courseFileScanner from '../src';

test('Initialization', (t) => {
  t.plan(1);
  t.ok(courseFileScanner('test-course.zip').getZipObject().getEntries().length, 'Makes sure a proper Zip object is returned.');
});

test('Get Course Files', (t) => {
  t.plan(1);
  let courseZip = courseFileScanner('test-course.zip');
  let courseFiles = courseZip.getCourseFiles();

  t.equals((Array.isArray(courseFiles) && courseFiles.length > 0), true, 'Makes sure an array of course files is returned.');
});
