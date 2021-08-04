# NanoCommons User Handbook

## Development setup

This project uses the [Jekyll](https://jekyllrb.com/) static site generator. The Jekyll theme used is [Just the Docs](https://github.com/pmarsceill/just-the-docs).

The pages are served via [GitHub Pages](https://pages.github.com/) and are rebuilt on every commit to the `main` branch.

When writing new or extending the existing content, it is quite helpfull to have your local development setup in place. This way, you'll be able to see and verify your changes immediately.

The two requirements for the local development setup are the [Ruby](https://www.ruby-lang.org/) programming language and the [Jekyll](https://jekyllrb.com/). Please follow the installation instructions for the two requirements. Note: your system may already have the Ruby programming language installed.

Once you have completed the setup, you need to install the required ruby modules (gems) by:

    bundle update

You need to run this once when setting up your environment and, optionally, when you (or others) add additional modules.

Finally, to run the development server run:

    bundle exec jekyll serve

Point your browser to http://127.0.0.1:4000/user-handbook/ and you should see your local version of the NanoCommons User Handbook.

Happy writing!
