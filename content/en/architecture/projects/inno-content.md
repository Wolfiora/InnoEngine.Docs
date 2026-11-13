---
title: Inno.Content
description: Verified deployment packs, portable content identities and independent read leases.
uid: project.inno-content
kind: project
owners: [Inno.Content]
---
# Inno.Content

Inno.Content provides platform-neutral deployment content: logical keys, a complete index, strict pack verification and read-only leases. It does not depend on Assets, Scene, Runtime, Build or a concrete platform. A host supplies the content store appropriate to its deployment.

Start with [opening verified deployment content](../../manual/assets/read-content-pack.md). Asset consumers use [Inno.Assets](inno-assets.md) above this boundary.

## Content ownership contract

`ContentPackReader.Open` takes ownership of a readable, seekable stream. The caller must stop using that stream after the call; failure and cancellation also dispose it. Successful validation returns a caller-owned `PackContentStore`. The serialization generation is borrowed for decoding the shared index.

Validate the complete encoded pack identity, entry inventory, decoded lengths and hashes, and finite expansion/read budgets before exposing the store. Reject invalid keys, duplicate or conflicting entries, unsafe archive entries and mismatched metadata. A valid filename alone does not certify a pack.

Each acquired lease and opened stream holds its own pin. Closing the store stops new acquisitions while existing readers can finish; the last pin releases the archive. Shared archive positioning is synchronized internally and each reader maintains its own logical cursor. This does not assume concurrent `ZipArchive` operations are safe or copy the whole pack for every read.

## Extension boundary

Additional sources implement `IRuntimeContentStore` with immutable metadata, logical keys and independent read retention. Physical paths stay with the host. Retire runtime consumers before releasing the host's store ownership; lease snapshots do not replace final release ordering.

The engine's FileSystem content adapter owns verified physical caching, cross-process publication and reader retirement. Those filesystem responsibilities do not move into the neutral Content contracts or the runtime asset database.

## API reference

[Content types and member contracts](../../api/engine/content/index.md) describe entries, keys, descriptors, index encoding, reading limits, stores and leases.
