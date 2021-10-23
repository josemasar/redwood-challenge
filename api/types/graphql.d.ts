import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type CreateIdeaInput = {
  active: Scalars['Boolean'];
  author: Scalars['String'];
  body: Scalars['String'];
  finish: Scalars['Boolean'];
  opportunity: Scalars['Boolean'];
  partNum: Scalars['String'];
  product: Scalars['String'];
  system: Scalars['String'];
  title: Scalars['String'];
  value: Scalars['Int'];
  vendor: Scalars['String'];
};

export type CreatePlanInput = {
  finish: Scalars['Boolean'];
  ideaId: Scalars['Int'];
  owner: Scalars['String'];
  plannedEnd: Scalars['DateTime'];
  plannedStart: Scalars['DateTime'];
  progress: Scalars['Int'];
};

export type CreateTaskInput = {
  Finish: Scalars['DateTime'];
  Requiredby: Scalars['DateTime'];
  Start: Scalars['DateTime'];
  owner: Scalars['String'];
  planId: Scalars['Int'];
  status: Scalars['String'];
  type: Scalars['String'];
};

export type Idea = {
  __typename?: 'Idea';
  active: Scalars['Boolean'];
  author: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  finish: Scalars['Boolean'];
  id: Scalars['Int'];
  opportunity: Scalars['Boolean'];
  partNum: Scalars['String'];
  plan?: Maybe<Plan>;
  product: Scalars['String'];
  system: Scalars['String'];
  title: Scalars['String'];
  value: Scalars['Int'];
  vendor: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createIdea: Idea;
  createPlan: Plan;
  createTask: Task;
  deleteIdea: Idea;
  deletePlan: Plan;
  deleteTask: Task;
  updateIdea: Idea;
  updatePlan: Plan;
  updateTask: Task;
};


export type MutationCreateIdeaArgs = {
  input: CreateIdeaInput;
};


export type MutationCreatePlanArgs = {
  input: CreatePlanInput;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationDeleteIdeaArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePlanArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateIdeaArgs = {
  id: Scalars['Int'];
  input: UpdateIdeaInput;
};


export type MutationUpdatePlanArgs = {
  id: Scalars['Int'];
  input: UpdatePlanInput;
};


export type MutationUpdateTaskArgs = {
  id: Scalars['Int'];
  input: UpdateTaskInput;
};

export type Plan = {
  __typename?: 'Plan';
  createdAt: Scalars['DateTime'];
  finish: Scalars['Boolean'];
  id: Scalars['Int'];
  idea: Idea;
  ideaId: Scalars['Int'];
  owner: Scalars['String'];
  plannedEnd: Scalars['DateTime'];
  plannedStart: Scalars['DateTime'];
  progress: Scalars['Int'];
  tasks: Array<Maybe<Task>>;
};

export type Query = {
  __typename?: 'Query';
  idea?: Maybe<Idea>;
  ideas: Array<Idea>;
  plan?: Maybe<Plan>;
  plans: Array<Plan>;
  redwood?: Maybe<Redwood>;
  sumIdeas?: Maybe<Array<Maybe<SumIdeas>>>;
  task?: Maybe<Task>;
  tasks: Array<Task>;
};


export type QueryIdeaArgs = {
  id: Scalars['Int'];
};


export type QueryPlanArgs = {
  id: Scalars['Int'];
};


export type QueryTaskArgs = {
  id: Scalars['Int'];
};

export type Redwood = {
  __typename?: 'Redwood';
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Task = {
  __typename?: 'Task';
  Finish: Scalars['DateTime'];
  Requiredby: Scalars['DateTime'];
  Start: Scalars['DateTime'];
  id: Scalars['Int'];
  owner: Scalars['String'];
  plan: Plan;
  planId: Scalars['Int'];
  status: Scalars['String'];
  type: Scalars['String'];
};

export type UpdateIdeaInput = {
  active?: Maybe<Scalars['Boolean']>;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  finish?: Maybe<Scalars['Boolean']>;
  opportunity?: Maybe<Scalars['Boolean']>;
  partNum?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  system?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
  vendor?: Maybe<Scalars['String']>;
};

export type UpdatePlanInput = {
  finish?: Maybe<Scalars['Boolean']>;
  ideaId?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  plannedEnd?: Maybe<Scalars['DateTime']>;
  plannedStart?: Maybe<Scalars['DateTime']>;
  progress?: Maybe<Scalars['Int']>;
};

export type UpdateTaskInput = {
  Finish?: Maybe<Scalars['DateTime']>;
  Requiredby?: Maybe<Scalars['DateTime']>;
  Start?: Maybe<Scalars['DateTime']>;
  owner?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SumIdeas = {
  __typename?: 'sumIdeas';
  total?: Maybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateIdeaInput: CreateIdeaInput;
  CreatePlanInput: CreatePlanInput;
  CreateTaskInput: CreateTaskInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Idea: ResolverTypeWrapper<Idea>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Plan: ResolverTypeWrapper<Plan>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Task: ResolverTypeWrapper<Task>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateIdeaInput: UpdateIdeaInput;
  UpdatePlanInput: UpdatePlanInput;
  UpdateTaskInput: UpdateTaskInput;
  sumIdeas: ResolverTypeWrapper<SumIdeas>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CreateIdeaInput: CreateIdeaInput;
  CreatePlanInput: CreatePlanInput;
  CreateTaskInput: CreateTaskInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Idea: Idea;
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Plan: Plan;
  Query: {};
  Redwood: Redwood;
  String: Scalars['String'];
  Task: Task;
  Time: Scalars['Time'];
  UpdateIdeaInput: UpdateIdeaInput;
  UpdatePlanInput: UpdatePlanInput;
  UpdateTaskInput: UpdateTaskInput;
  sumIdeas: SumIdeas;
};

export type RequireAuthDirectiveArgs = {
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RequireAuthDirectiveResolver<Result, Parent, ContextType = any, Args = RequireAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SkipAuthDirectiveArgs = { };

export type SkipAuthDirectiveResolver<Result, Parent, ContextType = any, Args = SkipAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IdeaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Idea'] = ResolversParentTypes['Idea']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  finish?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  opportunity?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  partNum?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType>;
  product?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  system?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  vendor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createIdea?: Resolver<ResolversTypes['Idea'], ParentType, ContextType, RequireFields<MutationCreateIdeaArgs, 'input'>>;
  createPlan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType, RequireFields<MutationCreatePlanArgs, 'input'>>;
  createTask?: Resolver<ResolversTypes['Task'], ParentType, ContextType, RequireFields<MutationCreateTaskArgs, 'input'>>;
  deleteIdea?: Resolver<ResolversTypes['Idea'], ParentType, ContextType, RequireFields<MutationDeleteIdeaArgs, 'id'>>;
  deletePlan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType, RequireFields<MutationDeletePlanArgs, 'id'>>;
  deleteTask?: Resolver<ResolversTypes['Task'], ParentType, ContextType, RequireFields<MutationDeleteTaskArgs, 'id'>>;
  updateIdea?: Resolver<ResolversTypes['Idea'], ParentType, ContextType, RequireFields<MutationUpdateIdeaArgs, 'id' | 'input'>>;
  updatePlan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType, RequireFields<MutationUpdatePlanArgs, 'id' | 'input'>>;
  updateTask?: Resolver<ResolversTypes['Task'], ParentType, ContextType, RequireFields<MutationUpdateTaskArgs, 'id' | 'input'>>;
};

export type PlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plan'] = ResolversParentTypes['Plan']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  finish?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  idea?: Resolver<ResolversTypes['Idea'], ParentType, ContextType>;
  ideaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plannedEnd?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  plannedStart?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  progress?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tasks?: Resolver<Array<Maybe<ResolversTypes['Task']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  idea?: Resolver<Maybe<ResolversTypes['Idea']>, ParentType, ContextType, RequireFields<QueryIdeaArgs, 'id'>>;
  ideas?: Resolver<Array<ResolversTypes['Idea']>, ParentType, ContextType>;
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RequireFields<QueryPlanArgs, 'id'>>;
  plans?: Resolver<Array<ResolversTypes['Plan']>, ParentType, ContextType>;
  redwood?: Resolver<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  sumIdeas?: Resolver<Maybe<Array<Maybe<ResolversTypes['sumIdeas']>>>, ParentType, ContextType>;
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QueryTaskArgs, 'id'>>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = any, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  Finish?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  Requiredby?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  Start?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  plan?: Resolver<ResolversTypes['Plan'], ParentType, ContextType>;
  planId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type SumIdeasResolvers<ContextType = any, ParentType extends ResolversParentTypes['sumIdeas'] = ResolversParentTypes['sumIdeas']> = {
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Idea?: IdeaResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Plan?: PlanResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redwood?: RedwoodResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  Time?: GraphQLScalarType;
  sumIdeas?: SumIdeasResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  requireAuth?: RequireAuthDirectiveResolver<any, any, ContextType>;
  skipAuth?: SkipAuthDirectiveResolver<any, any, ContextType>;
};
