---
uid: api.directory.engine.core.io
title: "IO"
kind: landing
owners: []
---

# IO

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [AtomicDirectory](atomicdirectory/index.md) | Provides rollback-safe installation of complete directory trees. |
| [AtomicFile](atomicfile/index.md) | Provides durable same-directory file replacement without exposing partial destination content. |
| [CoordinatedFileLease](coordinatedfilelease/index.md) | Holds a persistent owner gate throughout waiting for and using a retireable leaf lease. |
| [DirectoryCleanupException](directorycleanupexception/index.md) | Reports backup cleanup failure after a complete directory installation has already committed. The installed tree remains authoritative and must not be treated as a failed installation. |
| [FileByteDocumentStore](filebytedocumentstore/index.md) | Stores one file document with atomic replacement using the common filesystem boundary. |
| [FileLease](filelease/index.md) | Owns shared reading or exclusive writing rights coordinated by independent processes. |
| [IByteDocumentStore](ibytedocumentstore/index.md) | Reads and replaces one complete document without prescribing its physical location. |
| [OwnedReadStream](ownedreadstream/index.md) | Keeps an independent read stream and its lifetime pin owned together until both retire. |
| [PathBoundary](pathboundary/index.md) | Resolves paths while enforcing an explicit filesystem ownership boundary. |
| [PhysicalPathResolver](physicalpathresolver/index.md) | Resolves filesystem aliases within one caller-owned reading phase without granting write authority. |
| [ProcessOwnedDirectory](processowneddirectory/index.md) | Claims a new temporary directory before payload writes and preserves failed cleanup for later retirement. |
| [ProcessOwnedDirectoryDescriptor](processowneddirectorydescriptor/index.md) | Describes a recorded temporary directory without acquiring its producer&#39;s rights. |
| [ProcessOwnerStamp](processownerstamp/index.md) | Identifies one process lifetime without retaining a process handle or confusing recycled identifiers. |
| [ProcessOwnerState](processownerstate/index.md) | Describes whether an exact operating-system process lifetime can still own files. |
| [ReadOnlyByteDocumentStore](readonlybytedocumentstore/index.md) | Owns an immutable document snapshot that cannot be replaced through its read boundary. |

