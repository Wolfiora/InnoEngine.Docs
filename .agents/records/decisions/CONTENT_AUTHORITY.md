# Content and projection authority

## Decision

Readable English tutorials, tasks and explanations live only in `content/en/`. The engine owns source declarations, XML, project/API extraction and the transport-independent documentation library. Bound facts in `reference/` preserve exact capture provenance; they do not duplicate narrative authority.

The site consumes the content directly and checks its rendered anchors and declarations against the canonical catalog. Pagefind is a disposable browser-search projection. It is not the local agent query API and cannot certify source behavior.

## Consequences

Read-only local queries open an explicitly prepared immutable snapshot. They do not scan a mutable checkout, rewrite its index, fetch content, evaluate an SDK graph or build a native product. A future MCP adapter can call the same structured requests and expose the existing snapshot resource identities without parsing terminal output.

The writer separately identifies parser inputs and query implementation inputs. A ranking change rebuilds the query index while reusing verified parsed pages; a parser/model change invalidates those payloads. Both changes still require a compatible published generation for readers.

An updated documentation candidate may reuse unchanged source captures without rewriting every source link. Those captures remain tied to their original revision and tree. Matching declarations alone do not verify current behavior, executable examples or other environments; publication needs separately bound evidence.

## Remaining work

Source certification, explicit network snapshot preparation, completed legacy-validator cutover, paired PR gates and actual Pages deployment are not established by this decision. Their implementation and acceptance remain in the active modernization plan.
