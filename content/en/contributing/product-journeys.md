---
title: Interpret product and lifetime acceptance
description: Distinguish completed behavior, orderly process exit and
  retained-memory evidence.
uid: contributing.product-journeys
kind: explanation
owners:
  - Inno.Tooling.Validation
contracts:
  - project.inno-tooling-validation
---
# Interpret product and lifetime acceptance

A product journey verifies a composed application in its required environment. A successful managed suite, a completion notification or a process that merely started is insufficient evidence.

## Use immutable journey inputs

Sample input comes from a declared repository URL and exact commit. A leased Git dependency cache validates its bare owner, remote identity, all objects and selected commit before exporting the fixed project. A matching adjacent repository can supply objects read-only; its uncommitted workspace is never used.

Corrupt object caches are isolated and fetched again from the declared source. Network and real build failures remain failures. Run directories retain the input archive and provenance rather than copying arbitrary adjacent source trees.

## Observe behavior before closing

After completing behavior and resource sampling, the fixture atomically emits a notification. The driver verifies the expected workflows or panel cycles, cold preparation, full-GC sequence, memory change and pending-event state before requesting normal exit from the process it owns.

On Windows it closes that PID's unique Inno Editor main window. On macOS it requests termination of that PID through the AppKit application boundary. After exit it verifies behavior evidence and disposal completion again. Nonzero exit, premature exit, an invalid notification or timeout cannot pass.

Frame limits prevent an unfinished scenario from running forever; they are not a requirement to idle after completion. Independent renderer smoke checks still verify their required frame counts. `frameLimit` and `exitTrigger` distinguish the configured bound from observed completion. A notification is neither a certificate nor a cache-freshness input.

## Measure retained memory consistently

Ordinary panel journeys retain 100 cycles and eleven full-GC samples. Extended journeys retain 1,000 cycles and 101 samples. The fixture performs two synchronous compacting highest-generation collections with finalizer completion between them, then reads heap size minus fragmented bytes from the same completed FullBlocking snapshot.

GetTotalMemory estimates are diagnostic only. The driver rejects missing, duplicate, non-highest-generation, non-compacting, concurrent or internally inconsistent samples. The final retained-growth limit is 4 MiB. The isolated sampler regression must still reject a genuinely retained 8 MiB allocation. Sampling remains test-fixture code rather than production runtime instrumentation.

## Keep build and publication evidence separate

Full functional acceptance prepares required Release contexts, runs their product journeys, validates source-independent Player Support Packs and archives the same proven outputs. Source prerequisites and compiled output requirements are recorded separately; a NativeAOT restore dependency does not imply a DLL should exist in an unrelated Release output directory or that AOT execution was tested.

Extended acceptance additionally requires an actually unprepared Native cache, a cold build and ten warm iterations. Existing artifacts cannot be relabeled cold. Build, Native, reload or performance changes can select deep checks before the scheduled matrix.

The configured cadence is daily at 03:17 Taipei for new default-branch inputs, with Sunday reserved for the 04:17 extended matrix. Actual execution results and unavailable platforms belong in acceptance records, not assumed support claims.

## Retain and release accurately

Diagnostics, plans and TRX are retained for 30 days; deliverable archives for 90 days. Manual draft release inputs bind a successful run, exact commit and tag to verified server-downloaded manifests and digests. `verify_only` rehearses checks without creating a release. Publication reuses verified artifacts; it does not rebuild or formally release the engine automatically.

Keep the first failure and an explicit retry reason. Missing device access, incomplete retirement, damaged artifacts and unexecuted hosts remain visible obligations. See [validation evidence](../architecture/validation-evidence.md) and [the validation workflow](validate-change.md).
