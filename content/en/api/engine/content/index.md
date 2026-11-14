---
uid: api.directory.engine.content
title: "Content"
kind: landing
owners: []
---

# Content

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [ContentEntry](contententry/index.md) | Describes the exact uncompressed bytes of one immutable content entry. |
| [ContentKey](contentkey/index.md) | Identifies one content entry with case-sensitive, portable, slash-separated segments. |
| [ContentPackDescriptor](contentpackdescriptor/index.md) | Identifies the complete encoded pack independently of its physical source. |
| [ContentPackIndex](contentpackindex/index.md) | Freezes the complete payload set and rejects ambiguous keys before publication. |
| [ContentPackIndexCodec](contentpackindexcodec/index.md) | Encodes the current immutable content inventory through the common serialization protocol. |
| [ContentPackReader](contentpackreader/index.md) | Verifies complete encoded and decoded identities before transferring a pack into an immutable store. |
| [ContentReadLease](contentreadlease/index.md) | Pins immutable entry bytes while independent streams obtain their own retirement protection. |
| [ContentReadLimits](contentreadlimits/index.md) | Bounds encoded packs, decoded entries, inventory size, and total expansion before any content is accepted. |
| [IRuntimeContentStore](iruntimecontentstore/index.md) | Provides immutable content leases without exposing deployment paths or writable authoring sources. |
| [PackContentStore](packcontentstore/index.md) | Owns one validated archive with independent entry cursors and synchronized shared-stream positioning. |

