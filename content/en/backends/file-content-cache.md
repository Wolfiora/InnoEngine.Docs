---
title: Prepare a verified file content cache
description: Materialize a deployed content pack while preserving concurrent readers and the previous committed generation.
uid: backends.file-content-cache
kind: how-to
owners: [Inno.Adapter.Content.FileSystem]
contracts: [project.inno-adapter-content-filesystem]
---
# Prepare a verified file content cache

The file content adapter turns a borrowed read-only content source into a fully verified file-backed store. Runtime callers continue to use logical keys and streams. They do not locate generation directories or depend on cache filenames.

## Supply locations and retain the source

The host supplies an absolute application cache root and a bounded writer lock timeout through `FileContentCacheOptions`. Keep the source alive until `FileContentPreparation.PrepareAsync` completes. The returned store belongs to the caller and holds independent protection for its selected generation.

For an explicit file deployment, use `FileContentDeployment` with deployment and cache locations selected by the platform composition. It does not infer an OS layout. Metadata reads accept a single filename and have a 16 MiB limit. Pack preparation validates the full pack, isolates the cache using `StorageScope`, then closes the temporary pack source without invalidating the returned store.

## Validate before publishing

Preparation verifies the complete file and directory set, lengths and actual SHA-256 contents. A same-length modification with the original timestamp is still corruption; a `.complete` marker is not evidence of validity.

A cross-process writer lock protects installation. An invalid or absent cache is reconstructed as a separate staging candidate, verified, atomically published as a generation, then selected through an atomic current-pointer update. A failure before commit preserves the old pointer and cleans staging. Cancellation after a valid commit does not undo that committed generation.

## Release readers before retirement

Readers hold shared generation leases. Existing readers stay on the old generation during publication. The final outstanding stream must release its protection before the old generation can retire. Dispose the store only after its consumers finish; a cache path is not a substitute for a read lease.

Lock files persist. Releasing a lock does not mean deleting its file. If an old generation's lock is missing, the adapter cannot prove absence of readers: it preserves the directory and reports the problem rather than creating a new lock to infer safety.

## Diagnose an incomplete cleanup

Persistent access errors fail explicitly. `retirementDiagnostics` distinguishes failure to clean an old generation from failure to publish the new one. A valid committed generation remains committed even when subsequent cleanup fails; later preparation can retry retirement.

Inspect the first error, writer timeout, retained readers and actual generation protection. Do not delete active files, forge a marker or bypass a hash check. The cache's directory layout is an internal mechanism, not a public locating API.

See the [file content adapter reference](../api/projects/inno-adapter-content-filesystem.md) for an executable host example, or [open a content pack](../manual/assets/read-content-pack.md) for the neutral protocol.
