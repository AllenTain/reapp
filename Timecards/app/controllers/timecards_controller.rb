class TimecardsController < ApplicationController
  def new
  end

  def index
    @timecards = Timecard.all
  end

  def show
    @timecard = Timecard.all
  end
end
