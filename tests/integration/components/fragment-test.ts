import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

function trimmed(s: string | null) {
  if (!s) return '';
  return s.trim();
}

module('Integration | Component | fragment', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{fragment}}`);

    assert.equal(trimmed(this.element.textContent), '');

    // Template block usage:
    await render(hbs`
      {{#fragment}}
        template block text
      {{/fragment}}
    `);

    assert.equal(trimmed(this.element.textContent), 'template block text');
  });
});
