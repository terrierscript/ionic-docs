import { Component, Prop, h } from '@stencil/core';
import { Page } from '../../definitions';
import { ForwardArrow } from '../../icons';

@Component({
  tag: 'docs-page-footer',
  styleUrl: 'page-footer.css'
})
export class DocsPageFooter {
  @Prop() page: Page;

  hostData() {
    return {
      role: 'contentinfo'
    };
  }

  render() {
    const { page } = this;
    console.log(page);

    if (page == null || !page.github) {
      return null;
    }

    const {
      path,
      lastUpdated
    } = page.github;

    // merge and dedupe contributor data
    const contributors = Array.from(
      new Set([...page.github.contributors || [], ...page.contributors || []])
    );

    const editHref = `https://github.com/ionic-jp/ionic-docs/edit/master/${path}`;
    const updatedHref = `https://github.com/ionic-jp/ionic-docs/commits/master/${path}`;
    const updatedText = new Date(lastUpdated).toISOString().slice(0, 10);
    const contributorHref = (contributor) => `${updatedHref}?author=${contributor}`;

    const paggination = (
      page.previousText && page.previousUrl || page.nextText && page.nextUrl
    ) ? <docs-pagination page={page}/> : '';

    // console.log(paggination);

    return [
      paggination,
      <div class="page-footer__row">
        {contributors.length ? <contributor-list contributors={contributors} link={contributorHref}/> : null}
        <docs-button round href={editHref}>翻訳する <ForwardArrow/></docs-button>
        <a class="last-updated" href={updatedHref}>Updated {updatedText}</a>
      </div>
    ];
  }
}
