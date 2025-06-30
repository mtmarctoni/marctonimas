import { GITHUB_API_URL } from '@/utils/constants'

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  created_at: string;
  updated_at: string;
}

export async function getGitHubRepos(includeRepos?: string[]) {
  try {
    const response = await fetch(GITHUB_API_URL);
    if (!response.ok) throw new Error('Failed to fetch GitHub repos');
    
    let repos: GitHubRepo[] = await response.json();
    
    // Filter repositories if includeRepos is provided
    if (includeRepos && includeRepos.length > 0) {
      repos = repos.filter(repo => includeRepos.includes(repo.name));
    }
    
    return repos.map(repo => ({
      id: repo.id,
      title: repo.name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      description: repo.description || 'No description provided',
      codeUrl: repo.html_url,
      demoUrl: repo.homepage || null,
      tags: repo.topics || [],
      language: repo.language || 'Other',
      updatedAt: new Date(repo.updated_at).toLocaleDateString(),
      createdAt: new Date(repo.created_at).toLocaleDateString(),
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}