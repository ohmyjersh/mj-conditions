var mjml = require('mjml');
var fs = require('fs');

let canIGetThis = JSON.stringify({name:"butts"});

const customMJML = `<mjml>
  <mj-body>
      <mj-container>
       <mj-section>
          <mj-column>
              <mj-if condition=${canIGetThis}>
                <mj-text color="blue" font-size="10px">
                    wrapped in a mj-if
                </mj-text>
              </mj-if>
          </mj-column>
        </mj-section>
    </mj-container>
  </mj-body>
</mjml>
`;


try {
  const { html, errors } = mjml.mjml2html(customMJML, { beautify: true, level: "soft" })

  if (errors) {
    console.log(errors.map(e => e.formattedMessage).join('\n'))
  }
    fs.unlink('custom.html', function(err){

        // Ignore error if no file already exists
        if (err && err.code !== 'ENOENT')
            throw err;

        var options = { flag : 'w' };
        fs.writeFile('custom.html', html, options, function(err) {
            if (err) throw err;
            console.log('file saved');
        });
    });
} catch(e) {
  if (e.getMessages) {
  console.log(e.getMessages())
  } else {
    throw e
  }
}