---
title: Inno.Tooling.Documentation
description: Immutable documentation publication and transport-independent queries for engine development tools.
uid: project.inno-tooling-documentation
kind: project
owners:
  - Inno.Tooling.Documentation
contracts:
  - contributing.documentation-queries
---
# Inno.Tooling.Documentation

This tooling library prepares documentation snapshots and serves read-only queries. It is independent of the validation runner and engine products. The existing Build entry supplies the daily command-line interface; other transports call the same structured API.

## Responsibilities

The library parses Markdown with Markdig, reads page metadata, checks project and include relationships, builds search entries and publishes immutable generations. Its readers resolve page and symbol identities and return original content with explicit continuations and provenance.

It does not extract the engine's API, compile examples, certify source compatibility, build products, prepare Native dependencies or silently download documentation. The engine's existing extraction and validation systems own those responsibilities.

## Common tasks

- [Prepare and query a local snapshot](../../contributing/documentation-queries.md).
- [Understand resource ownership](../../architecture/ownership.md).
- [Distinguish API surfaces](../index.md).

## Publication and reading

`DocumentationStore.IndexAsync` takes explicit workspace, documentation and cache roots. It validates the engine binding and project manifest, detects content changes, reuses matching parsed pages and publishes a complete generation. An interrupted preparation does not select a partial index.

`DocumentationStore.OpenAsync` opens an exact generation or resolves the current pointer once. The returned `DocumentationSnapshot` owns reading protection. Finish its concurrent queries before disposing it; disposal releases the generation for subsequent cache maintenance.

An open snapshot remains a snapshot of its captured inputs even if the authored checkout changes. Refresh explicitly to observe those changes. This distinction allows repeated reads without rescanning the source tree.

## Query contract

`DocumentationRequest` selects search, read, symbol, resource or status operations. `DocumentationResult` separates status, provenance, selected content, required contracts and the next structured request.

`DocumentationHit` identifies the page, section, source line, projects, API surface, symbol, match reason, completeness and stable resource. `DocumentationContinuation` identifies unread original content or a necessary contract. Consumers must preserve these distinctions when adapting results to another transport.

The CLI adapter is `DocumentationCommand.ExecuteAsync`. JSON output contains the structured result. Text output is intended for people and must not become an integration protocol.

`DocumentationSnapshot.ExportCatalogAsync` returns a `DocumentationCatalogReport` with the complete canonical page and project inventory. Its `DocumentationPageInfo` entries include content identities, parsed anchors, symbol anchors and necessary contract relationships. Website navigation and rendered-output checks consume these facts instead of introducing another Markdown parser.

Catalog export reads the selected protected snapshot. It does not refresh a mutable checkout. A project without an authoritative entry is reported with a null entry, and an unverified API state remains unverified. The catalog's content identity describes sorted source paths and Markdown hashes independently of the query implementation identity.

## Failure and ownership boundaries

Path escape, invalid ownership, corrupt payloads, duplicate authority and include cycles fail visibly. Missing content and ambiguous symbols remain distinct query results. Cancellation does not destroy the previous published generation or transfer ownership to the caller.

The library uses the existing Core IO atomic publication and file leases together with the build cache ownership registry. It does not invent an independent cleanup authority. Current generations, their page dependencies and active readers must remain protected during retirement.
