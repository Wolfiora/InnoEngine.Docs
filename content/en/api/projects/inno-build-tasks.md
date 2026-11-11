---
title: Inno.Build.Tasks
description: "Thin MSBuild adapters for the engine's existing generation, shader and product preparation libraries."
uid: project.inno-build-tasks
kind: project
owners: [Inno.Build.Tasks]
---
# Inno.Build.Tasks

Thin MSBuild adapters for the engine's existing generation, shader and product preparation libraries.

Read the linked task or ownership explanation before using the exact API below.

## One implementation behind SDK integration

These sealed Tasks adapt shared libraries used by CLI and product builds. MSBuild supplies its runtime implementation of the pinned compilation contracts. The Tasks assembly is not a product runtime dependency and does not define another command parser, SDK selector or publication mechanism.

GenerateBindingsTask maps explicit component definition, target, mode, CheckOnly and expected identity to the shared generator. Outputs describe only a successful complete selection. Lightweight TaskHosting materializes the selected source so a Native project does not recursively prepare the full Task runtime just to read its own binding.

CompileShaderTask uses platform-injected API/target choices and actual offline tool, source, runtime, configuration and resource identities. A protected complete hit reuses output; same-length input edits, corruption or concurrent input mutation cannot. Tool-host and game Shader targets are separate. PublishSupportPackTask delegates the neutral publisher with the selected host SDK.

## Product preparation and deployment

PrepareProductNativeTask resolves the declared product through Standard Distribution, then runs its plan and exact deployment. Ordinary Build prepares before AssignProjectConfiguration; Publish installs the matching closure to PublishDir. Design-time evaluation does not prepare Native products. Failure, cancellation or invalid deployment fails MSBuild; content-identical Native trees preserve their files.

One root build stores successful neutral preparation descriptions by complete frozen request. Later consumers obtain independent readers and revalidate after waiting. A serialization lock alone does not establish identity. Private load contexts share BCL data, never plugin objects or live leases.

## Selection and lifecycle

The product's intermediate NativeBindingSelection.props propagates to non-analyzer references, but only the binding owner consumes it as compilation input. It retains actual component initialization/link mode and generation identity. Unchanged bytes preserve timestamps; nested Build completion does not delete it prematurely. Publish rejects a missing selection before bootstrap and verifies the actual managed selection against prepared Native outputs before installation. No-build Publish must supply that selection explicitly.

Tasks map exceptions to structured MSBuild errors and false, and Cancel coordinates process/staging lifetime. Shared Shader tools retain the initially frozen SDK selection within Build lifetime while validating outputs on every use. See [Task hosts](../../architecture/task-hosts.md) and [Native preparation](../../architecture/native-preparation.md) for the complete ownership protocols.

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/tasks/Inno.Build.Tasks/Inno.Build.Tasks.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Browse types and members](../types/build-execution/inno-build-tasks/index.md).
