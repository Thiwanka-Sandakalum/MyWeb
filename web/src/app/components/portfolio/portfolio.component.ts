import { Component, OnInit } from '@angular/core';

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {
  // Define an array of PortfolioItem objects
  portfolioItems: PortfolioItem[] = [
    {
      title: 'Minimal Design',
      imageSrc: 'assets/img/portfolio/p1.jpg',
      category: 'desktop',
      description: 'Animated, portfolio'
    },
    {
      title: 'Paint Wall',
      imageSrc: 'assets/img/portfolio/p2.jpg',
      category: 'web',
      description: 'Animated, portfolio'
    },
    {
      title: 'Female Light',
      imageSrc: 'assets/img/portfolio/p3.jpg',
      category: 'desktop',
      description: 'Animated, portfolio'
    },
    {
      title: 'Fourth Air',
      imageSrc: 'assets/img/portfolio/p4.jpg',
      category: 'web',
      description: 'Animated, portfolio'
    },
    {
      title: 'Together Sign',
      imageSrc: 'assets/img/portfolio/p6.jpg',
      category: 'data_science',
      description: 'Animated, portfolio'
    },
    {
      title: 'Multiply Fowl',
      imageSrc: 'assets/img/portfolio/p5.jpg',
      category: 'ongoing',
      description: 'Animated, portfolio'
    }
  ];

  // Initialize activeFilter with *
  activeFilter: string = '*';
  filteredPortfolioItems: PortfolioItem[] | undefined;
item: any;

  constructor() { }

  ngOnInit(): void {
    // Show all portfolio items by default
    this.activeFilter = '*';
    this.filteredPortfolioItems = this.portfolioItems;
  }
  
  categoryFilter(filter: string): void {
    this.activeFilter = filter;
    if (this.activeFilter === '*') {
      this.filteredPortfolioItems = this.portfolioItems;
    } else {
      this.filteredPortfolioItems = this.portfolioItems.filter(item => item.category === this.activeFilter);
    }
  }
  
}