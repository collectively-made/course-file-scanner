import test from 'tape';
import courseFileScanner from '../src';

test('courseFileScanner', (t) => {
  t.plan(1);
  t.ok(courseFileScanner('../test-course.zip').getEntries().length, 'Makes sure a proper Zip object is returned.');
});
