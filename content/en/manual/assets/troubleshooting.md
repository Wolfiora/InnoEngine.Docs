---
title: Diagnose Missing assets and failed imports
description: Separate source identity, import status, last-good content and export integrity before retrying.
uid: manual.assets.troubleshooting
kind: troubleshooting
owners: [Inno.Assets, Inno.Assets.Pipeline, Inno.Content]
contracts: [project.inno-assets-pipeline#publication-and-failure-contract]
---
# Diagnose Missing assets and failed imports

Begin with the persistent identity and current diagnostic. A file at the expected path, a cached artifact and a successful former import are different facts; none alone proves that the current asset is valid.

## A reference remains Missing after replacing a file

References resolve by persistent ID. The last-known path is a diagnostic hint. Restore both the original source and its `.imeta` metadata when recovering that same asset. Creating another file at the old path without its original identity does not restore existing references.

Tombstones preserve neutral properties, dependency descriptions and the last-successful artifact key, but release the former live payload and strong references. Keeping that old key does not permanently retain its physical cache or certify it as current loadable content.

## Import failed, but the Editor still shows content

The Editor may retain last-good content while reporting a failed current import. Inspect the source, settings, declared dependencies and current importer generation. A Player export rejects required stale, failed or missing inputs even if the Editor can still display the older result.

Temporary file locks or access denial are retried on the next rescan even without a content change. Deterministic failures retry when relevant source, settings, dependencies or importer inputs change. Publishing a new type-catalog generation can make a failed dependency available; the active loader observes and retries a failure at most once automatically per new generation. This observation is process state, not a persistent-format field.

## Saving settings returns false

The settings write succeeded and the subsequent import failed. Read the current diagnostic before deciding whether to restore the previous settings. External conflicts or an unwritable sidecar throw instead; do not suppress them by overwriting the source. See [editing import settings](import-settings.md).

## Runtime export rejects an artifact

Follow the reported dependency path. Export checks required authoring dependencies, including source/include inputs, before certifying the runtime closure. Reimport stale or failed sources, then rebuild. Export does not quietly reimport halfway through target compilation because that could combine different generations.

Output length alone is insufficient. Payload reads and export verify actual hashes, and writable source loading rechecks contents even for same-length changes or preserved timestamps. A corrupt artifact raises a data-integrity error rather than entering the Player.

## The file browser retains its former index

Filesystem refresh prepares and validates the complete candidate before replacing the current index. Enumeration, permissions, duplicate identity or registration failures preserve the last complete view. Fix the cause, then reconcile again. Entries with unchanged persistent identity retain their instance/runtime identity during an ordinary rescan.

## A mount is read-only or the generation is faulted

Read-only import failures are recorded in the writable catalog; reporting them must not write back to the installed source. Missing sidecars and identity conflicts still fail explicitly.

A pending retirement keeps its dependencies until work drains. A faulted generation rejects later access and dependent destruction; restart the host after preserving diagnostics. Deleting an active Library, disabling integrity checks or reusing an old object does not repair the ownership state.
