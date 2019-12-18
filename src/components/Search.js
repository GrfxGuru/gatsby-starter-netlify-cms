import React, { Component } from 'react'
import { Link } from 'gatsby'

// Search component
class Search extends Component {
    state = {
        query: '',
        results: [],
    }

    render() {
        const ResultList = () => {
            if (this.state.results.length > 0) {
                return this.state.results.map((page, i) => (
                    <div className="item-search" key={i}>
                        <Link to={page.url} className="link">
                            <h4>{page.title}</h4>
                        </Link>
                    </div>
                ))
            } else if (this.state.query.length > 2) {
                return 'No results for ' + this.state.query
            } else if (
                this.state.results.length === 0 &&
                this.state.query.length > 0
            ) {
                return 'Please insert at least 3 characters'
            } else {
                return ''
            }
        }

        return (
            <div className={this.props.classNames}>
                <p className="searchBoxLabel">SEARCH:</p>
              <form method="get" id="search" action="https://duckduckgo.com/">
                <input type="hidden" name="sites" value="peterwitham.net" />
                <input type="hidden" name="k8" value="#444444" />
                <input type="hidden" name="k9" value="#ee4792" />
                <input type="hidden" name="kt" value="h" />
                <input
                  class="field"
                  type="text"
                  name="q"
                  maxlength="255"
                  placeholder="To search, type and hit Enter…"
                  style={{
                    width: '80%',
                    height: 28,
                    borderRadius: 6,
                    paddingLeft: 4,
                    paddingRight: 4,
                    fontSize: 16,
                  }}
                />
              </form>
            </div>
        )
    }

    getSearchResults(query) {
        var index = window.__FLEXSEARCH__.en.index
        var store = window.__FLEXSEARCH__.en.store
        if (!query || !index) {
            return []
        } else {
            var results = []
            Object.keys(index).forEach(idx => {
                results.push(...index[idx].values.search(query))
            })

            results = Array.from(new Set(results))

            var nodes = store
                .filter(node => (results.includes(node.id) ? node : null))
                .map(node => node.node)

            return nodes
        }
    }

    search = event => {
        const query = event.target.value
        if (this.state.query.length > 2) {
            const results = this.getSearchResults(query)
            this.setState({ results: results, query: query })
        } else {
            this.setState({ results: [], query: query })
        }
    }
}

export default Search
