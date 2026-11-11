---
title: Render graph validation and frame ownership
description: Freeze contributions, reuse revision-scoped analysis and retire device resources without retaining extension generations.
uid: architecture.render-frame
kind: explanation
owners: [Inno.Rendering, Inno.Rendering.Runtime]
---
# Render graph validation and frame ownership

A render graph describes resources and ordered work for one graph generation. Rendering Runtime composes domain requests into that graph; the device executes the result under its own thread and resource-lifetime rules.

## Separate validation from allocation

Validate checks graph relationships, capabilities, initialization, dependencies, cycles and view limits. It returns an immutable analysis for the current revision without allocating the executable graph. Compile reuses valid analysis and allocates the final resources/commands.

Accepted passes are frozen. A frame-local workspace can reuse resource state and dependency/phase relationships when another contribution adds declarations. It must still validate the complete candidate's outputs, live passes, topology and limits. A later phase may create a new dependency involving an earlier pass, so an accepted prefix is not sufficient proof of the new graph.

Mutation invalidates stale analysis. Editing an analyzed but unfrozen pass or rolling back resets the workspace where necessary. The final normal frame compiles once; scratch lives inside that operation and does not become a global extension-object cache.

## Roll back one contribution

BeginMutationScope creates a strict LIFO transaction over resources, passes, outputs, name scopes and accepted analysis. Successful Commit validates/freezes the new declarations. Failure restores the previous accepted state.

Resource identities already issued are not reused after rollback. A stale handle must fail instead of accidentally identifying a newly allocated graph resource. Persistent assets keep stable semantic identities rather than these graph/device handles.

## Record in parallel only when declared

AllowParallelRecording permits selected callbacks to record concurrently; it does not make the device owner-thread-free. Replay still follows compiled pass order.

Recording immediately copies borrowed uniform and transform data. Handles/samplers are retained by value; raster/stencil state retains its current object semantics. Execute owns recording buffers and their references, releasing them on normal completion, callback failure, replay failure or backend exit error. A graph without parallel recording uses the direct serial path.

## Preserve frame and output boundaries

The primary output size is real physical presentation extent or null. Publish size changes at the frame safe point and reject zero as an available output. Offscreen outputs have separate valid dimensions. Output sRGB facts and allocation counters come from the actual device; unavailable measurements remain null.

Rendering Runtime captures contributor membership once per frame. Mid-frame registration changes affect the next snapshot, not the current one. Callers retain contributor objects until every captured user has finished.

Device resources, runtime generations and window handles retire under their respective owners. Clear extension references from scratch on success, failure and shutdown, even when retaining buffer capacity. A retired window-surface Task is not a universal GPU fence.

## Distinguish diagnostic categories

Missing content, corrupt artifacts and insufficient device capabilities need different remedies. A failed candidate preserves last-good state. Ordinary graph-extension errors can roll back their scope, but Pending retirement and faulted owner state cannot be converted into a warning and continued release.

See [graph API](../api/projects/inno-rendering.md), [Rendering Runtime](../api/projects/inno-rendering-runtime.md) and [frame contribution](../extending/render-frame.md) for exact requests, resource contracts and extension points.
