---
title: Locate content and application data
description: Separate installed content, writable application storage and build caches on desktop and Browser.
uid: platforms.application-data
kind: explanation
---
# Locate content and application data

Installed game content and writable application values have different lifetimes. A product resolves its platform locations at startup and passes them to the appropriate service; domain code does not guess OS paths.

## Desktop layouts

| Product platform | Published content location | User-data root |
| --- | --- | --- |
| [Windows x64](../api/projects/inno-platform-windowsx64.md) | `Content` below the executable directory | Windows `LocalApplicationData` |
| [macOS ARM64](../api/projects/inno-platform-macosarm64.md) | Normalized `../Resources/Content` relative to the executable directory | User profile's `Library/Application Support` |

The content resolver accepts an absolute executable directory and computes one explicit location. It does not search alternative layouts or prove that the content was successfully packaged. Empty or relative input fails. User-root lookup rejects the wrong OS and unusable system locations.

These small location services do not own devices, sessions, filesystem stores or content readers. The product passes their results to actual Content, Storage and Log owners. Keep application namespaces separate inside the chosen storage root.

## Browser values

The [Browser storage adapter](../api/projects/inno-adapter-storage-browserwasm32.md) uses `StorageScope` to isolate key prefixes in the current origin's `localStorage`. This is a namespace, not a directory path. Scripts continue to use the neutral Storage contract.

Bytes are Base64-encoded. A write replaces one key, not an entire application transaction. Missing reads return null; quota, access and corrupt-value failures stay visible. The browser controls persistence and storage policy, so do not promise indefinite durability or filesystem semantics.

Listing includes only the selected scope, optionally restricted to an exact prefix or slash-delimited descendants, in ordinal order. Cancellation is checked before synchronous JavaScript access; the `ValueTask` API does not move storage work to a background thread.

## Keep caches out of application state

Content Packs and script payloads belong to product deployment. Native compiler outputs and Support Packs belong to the build cache with its own owners and read protection. Neither belongs in application save data.

Use [application storage](../manual/storage/save-data.md) for user values and [content-pack reading](../manual/assets/read-content-pack.md) for published runtime content. Diagnose their failures at the appropriate owner instead of adding a fallback that searches unrelated directories.
