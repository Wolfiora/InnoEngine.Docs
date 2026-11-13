---
title: Locate content and application data
description: Keep installed content, application values and build caches under their distinct owners.
uid: platforms.application-data
kind: explanation
---
# Locate content and application data

Engine code consumes content and storage services supplied by its host. It does not reconstruct an operating system's directories or assume that every target has a filesystem.

## Separate the three kinds of data

| Data | Owner | Usage |
| --- | --- | --- |
| Published content | Product content source and reader | Open the selected catalog and verified content packs. |
| Application values | Scoped Storage service | Read and write values through the supplied storage contract. |
| Build artifacts | Build publisher and protected consumers | Prepare, acquire and release immutable build outputs. |

A save-data namespace is not a path to a native cache. Published assets are not a writable application database. Keep these boundaries intact when composing a host.

## Consume the supplied service

Use [application storage](../manual/storage/save-data.md) for user values and [content-pack reading](../manual/assets/read-content-pack.md) for runtime assets. Pass dependencies explicitly rather than searching several directories until one works.

Do not assume filesystem transactions, background execution, unlimited capacity or indefinite durability. The selected service's capabilities, cancellation and failure contract remain observable. A portable API does not erase environment restrictions.

## Keep ownership explicit

A resolved location does not own the store, stream or content reader created from it. Keep the owning host alive while its borrowed services are in use, stop new operations before shutdown and release each owned object once.

Concrete OS paths, browser persistence implementation and platform startup wiring are outside this documentation scope. See [product and target boundaries](index.md) for selecting capabilities without coupling domain code to a platform.
