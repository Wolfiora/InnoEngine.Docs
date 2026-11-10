---
title: Inno.Adapter.Storage.FileSystem
description: Complete-value application storage under an explicitly owned filesystem root.
uid: project.inno-adapter-storage-filesystem
kind: project
owners:
  - Inno.Adapter.Storage.FileSystem
---
# Inno.Adapter.Storage.FileSystem

This backend implements `IApplicationStorage` with regular files under an explicit host root. Logical keys and scopes remain neutral; physical paths belong to host composition and are not exposed through the script facade.

## Configure the provider

Construct `FileSystemStorageBackendProvider` with an absolute writable data root. It captures configuration without creating a storage service. `CreateStorage(StorageScope)` validates the namespace and creates an independent service beneath `<root>/<scope>/Storage`. There is no parameterless provider or string-based namespace creation overload in the current contract.

Direct `FileSystemApplicationStorage` construction resolves and fixes its supplied root, creates the directory if needed and rejects a root that is a symbolic link or reparse point. Host composition should provide an explicit absolute location rather than depending on a process working directory.

## Path and operation contract

Key resolution reuses Core `PathBoundary`, including explicitly selected volume roots. Existing path components are rechecked and symbolic links/reparse points are rejected. Do not replace these checks with string-prefix matching or infer ownership from a directory name.

Writes create a unique temporary file beside the target, flush it and atomically replace the complete destination. Cancellation is checked again before replacement. Failure or cancellation cleans the temporary file. Reads return null for absent values, deletes report whether a regular file existed, and lists use deterministic ordinal key ordering.

The instance gate serializes reads and mutations. That gate belongs to this instance; it does not promise a transaction across separate instances, processes or several keys. Keep application-level writer coordination with the application.

## Shutdown and ownership

Dispose and IO use the same gate. The implementation does not destroy its semaphore while a writer still needs to release it. Existing waiters can observe disposal and exit; subsequent API use fails explicitly. The usual runtime owner cancels and drains accepted operations before disposing the adapter.

When integrating directly, retain the adapter until owned operations finish. A canceled await is not permission to delete its root or another operation's temporary files. The host owns persistent application data; disposing the service releases synchronization resources, not the saved files.

## Related guidance

- [Save application data](../../manual/storage/save-data.md).
- [Storage keys and namespaces](inno-storage.md).
- [Runtime admission and retirement](inno-storage-runtime.md).
- [Provider selection](inno-adapter-storage.md).

## API reference

The exact source reference supplies parameters, return values and failure contracts. Filesystem semantics do not certify a Browser backend or another device.

[Browse filesystem storage types](../types/storage-filesystem/index.md).
